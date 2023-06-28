import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';
import { Container, ErrorMessage, Input, Label, Textarea, SentMessage } from 'components/Form';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { SectionTitle } from 'components/Typography/SectionTitle';

import { PageLayout } from 'layout/PageLayout';

import * as Styled from './Contact.styles';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

export const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const formRef = useRef<HTMLFormElement>(null);
  const [sendingStatus, setSendingStatus] = useState(false);
  const [okStatus, setOkStatus] = useState<string | null>(null);

  const sendEmail = () => {
    const currentForm = formRef.current;
    if (currentForm === null) return;
    setSendingStatus(true);

    emailjs.sendForm('service_jmouk4o', 'template_q8cy5fy', currentForm, 'kHbfVc7i6W4XME0Lz').then(
      (result) => {
        console.log(`Send status: ${result.text}`);
        setSendingStatus(false);
        setOkStatus('OK');
        reset();
      },
      (error) => {
        console.log(error.text);
        setSendingStatus(false);
        setOkStatus(null);
      }
    );
  };

  useEffect(() => {
    if (okStatus === 'OK') {
      setTimeout(() => {
        setOkStatus(null);
      }, 5000);
    }
  }, [okStatus]);

  return (
    <PageLayout>
      <SectionTitle title={t('contact.title')} />
      <Styled.Paragraph>{t('contact.description')}</Styled.Paragraph>
      <Styled.FormBox>
        <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
          <Container>
            <Label htmlFor="firstName">{t('contact.firstName')}</Label>
            <Input
              {...register('firstName', {
                required: true,
              })}
              maxLength={70}
              id="firstName"
              type="text"
              name="firstName"
              placeholder={t('contact.firstName')}
              $error={!!errors.firstName}
            />
            {errors.firstName && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="lastName">{t('contact.lastName')}</Label>
            <Input
              {...register('lastName', {
                required: true,
              })}
              maxLength={70}
              defaultValue=""
              id="lastName"
              type="text"
              name="lastName"
              placeholder={t('contact.lastName')}
              $error={!!errors.lastName}
            />
            {errors.lastName && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="email">{t('contact.email')}</Label>
            <Input
              {...register('email', {
                required: true,
              })}
              maxLength={70}
              id="email"
              type="email"
              name="email"
              placeholder={t('contact.email')}
              $error={!!errors.email}
            />
            {errors.email && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="phone">{t('contact.phone')}</Label>
            <Input
              {...register('phone', {
                required: true,
              })}
              maxLength={70}
              id="phone"
              type="tel"
              name="phone"
              placeholder={t('contact.phone')}
              $error={!!errors.phone}
            />
            {errors.phone && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="message">{t('contact.message')}</Label>
            <Textarea
              {...register('message', {
                required: false,
              })}
              maxLength={1000}
              id="message"
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              $error={!!errors.message}
            />
          </Container>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" onClick={() => {}} loading={sendingStatus}>
              {t('contact.submit')}
            </Button>
          </div>
        </form>
        {okStatus === 'OK' && <SentMessage>{t('contact.sent')}</SentMessage>}
      </Styled.FormBox>
      <SocialMedia />
    </PageLayout>
  );
};
