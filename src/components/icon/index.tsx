import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import {
  ChartSvg,
  ChatSvg,
  HelpSvg,
  SettingsSvg,
  UserSvg,
  PaperSvg,
  LogoutSvg,
  BagSvg,
  SearchSvg,
  BellSvg,
  IntegrationSvgs,
} from "./svgs";

const ChartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ChartSvg} {...props} />
);

const ChatIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ChatSvg} {...props} />
);

const HelpIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HelpSvg} {...props} />
);
const SettingsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SettingsSvg} {...props} />
);

const UserIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UserSvg} {...props} />
);

const PaperIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PaperSvg} {...props} />
);

const LogoutIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogoutSvg} {...props} />
);

const BagIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BagSvg} {...props} />
);

const SearchIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SearchSvg} {...props} />
);

const BellIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BellSvg} {...props} />
);

const IntegrationIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={IntegrationSvgs} {...props} />
);
export {
  ChartIcon,
  ChatIcon,
  HelpIcon,
  SettingsIcon,
  UserIcon,
  PaperIcon,
  LogoutIcon,
  BagIcon,
  SearchIcon,
  BellIcon,
  IntegrationIcon,
};
