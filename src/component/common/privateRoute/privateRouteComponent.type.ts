import { IPrivateRouteContainerMapState } from "../../../containers/common/privateRoute/privateRouteContainer.type";
import { RouteComponentProps } from "react-router";

type PartialRouteComponentProps = Partial<RouteComponentProps<null>>;

export interface IPrivateRouteProps extends IPrivateRouteContainerMapState, PartialRouteComponentProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
  path: string,
}
