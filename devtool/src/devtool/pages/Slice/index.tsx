import React, { useMemo } from 'react';
import { Page } from '../../../_shared/template/Page';
import { useRouter } from '../../../_shared/hooks/useRouter';
import { slices } from '../../../_shared/components';
import { SliceName } from '../../../_shared/contexts/Routing/types';

export const Slice: React.FC = () => {
  const { route } = useRouter();
  const { state } = route;

  const breadCrumbSlice =
    (state && slices[state.slice as SliceName]?.displayName) || 'slice';
  const breadCrumbDetail = state?.detailKey;
  const breadCrumb = breadCrumbDetail
    ? [breadCrumbSlice, breadCrumbDetail]
    : [breadCrumbSlice];

  const renderContent = useMemo(() => {
    if (state?.detailKey) {
      return slices[state.slice].renderDetail || <></>;
    }

    if (state?.slice) {
      return slices[state.slice].render;
    }

    return <></>;
  }, [state?.detailKey, state?.slice]);

  const title = useMemo(() => {
    if (state?.detailKey) {
      return state.detailKey;
    }

    if (state?.slice) {
      return slices[state.slice]?.displayName;
    }

    return '';
  }, [state?.detailKey, state?.slice]);

  return (
    <Page breadcrumb={['slices', ...breadCrumb]} title={title}>
      {renderContent}
    </Page>
  );
};
