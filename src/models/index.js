// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ApplicationStatus = {
  "IN_REVIEW": "IN_REVIEW",
  "REJECTED": "REJECTED",
  "INTERVIEW": "INTERVIEW",
  "WITHDREW": "WITHDREW"
};

const { Application, Project, Profile, ProjectType } = initSchema(schema);

export {
  Application,
  Project,
  Profile,
  ApplicationStatus,
  ProjectType
};