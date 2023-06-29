import axios from 'axios';

import { BASE_URL, useAPImocks } from '../config';
import { getContentMock } from './Content.mock';
import { ContentDTO } from './Content.model';

export const getContent = () =>
  useAPImocks
    ? getContentMock()
    : axios
        .get<ContentDTO>(`${BASE_URL}/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1`)
        .then(({ data }) => data);
