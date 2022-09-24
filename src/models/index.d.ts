import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ApplicationStatus {
  IN_REVIEW = "IN_REVIEW",
  REJECTED = "REJECTED",
  INTERVIEW = "INTERVIEW",
  WITHDREW = "WITHDREW"
}



type ApplicationMetaData = {
  readOnlyFields: 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Application {
  readonly id: string;
  readonly company: string;
  readonly status: ApplicationStatus | keyof typeof ApplicationStatus;
  readonly role?: string | null;
  readonly channel?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Application, ApplicationMetaData>);
  static copyOf(source: Application, mutator: (draft: MutableModel<Application, ApplicationMetaData>) => MutableModel<Application, ApplicationMetaData> | void): Application;
}

export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly url?: string | null;
  readonly description?: string | null;
  readonly poster?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}