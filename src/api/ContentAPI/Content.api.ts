import axios from 'axios';

import { BASE_URL, useAPImocks } from '../config';
import { getContentMock } from './Content.mock';
import { ContentDTO } from './Content.model';

export const getContent = () =>
  useAPImocks
    ? getContentMock()
    : axios
        .get<ContentDTO>(
          `${BASE_URL}/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1`
        )
        .then(({ data }) => data);
