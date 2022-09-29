import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ApplicationStatus {
  IN_REVIEW = "IN_REVIEW",
  REJECTED = "REJECTED",
  INTERVIEW = "INTERVIEW",
  WITHDREW = "WITHDREW"
}

export declare class ProjectType {
  readonly id: string;
  readonly name: string;
  readonly url?: string | null;
  readonly description?: string | null;
  readonly poster?: string | null;
  readonly caseStudie?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly owner?: string | null;
  readonly _version?: string | null;
  readonly _lastChangedAt?: string | null;
  readonly _deleted?: string | null;
  constructor(init: ModelInit<ProjectType>);
}

type ApplicationMetaData = {
  readOnlyFields: 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
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
  readonly caseStudie?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Profile {
  readonly id: string;
  readonly tagline: string;
  readonly summary: string;
  readonly avatar: string;
  readonly userID?: string | null;
  readonly projects?: ProjectType[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}