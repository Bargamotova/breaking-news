import Skeleton from "../../components/skeleton/Skeleton";
import { SkeletonType } from "../../interfaces";

interface Props {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...(restProps as P)} />;
  };
}
export default withSkeleton;
