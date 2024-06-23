import React, { useEffect, Suspense } from "react";
import { useMatchDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/actions";
import ErrorBoundary from "../../ErrorBoundary";
const MatchList = React.lazy(() => import("./MatchList"));
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LiveMatch:React.FC = () => {
  const dispatch = useMatchDispatch();
  useEffect(() => {
    fetchMatches(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-gray-900 dark:text-white font-bold text-xl">
        Live Games
      </h1>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="ml-4 flex gap-4 overflow-x-auto">
              <SkeletonTheme baseColor="#d1cdcd" highlightColor="#adacac">
                {Array(4)
                  .fill(0)
                  .map((ele, index) => {
                    return (
                      <Skeleton key={index} height={140} width={250}></Skeleton>
                    );
                  })}
              </SkeletonTheme>
            </div>
          }
        >
          <div className="overflow-x-auto mt-2 flex items-center w-full">
            <MatchList />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}


export default LiveMatch;