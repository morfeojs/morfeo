import React, { useMemo } from 'react';
import { Page } from '../../../_shared/template/Page';
import { useRouter } from '../../../_shared/hooks/useRouter';
import { CodeSnippets, slices, SliceConfig } from '../../../_shared/components';
import { SliceName } from '../../../_shared/contexts/Routing/types';

export const Slice: React.FC = () => {
  const { route } = useRouter();
  const { state } = route;

  const sliceConfig = useMemo(
    () => (state ? slices[state.slice as SliceName] : ({} as SliceConfig)),
    [state],
  );

  const breadCrumbSlice = sliceConfig.displayName || 'slice';
  const breadCrumbDetail = state?.detailKey;
  const breadCrumb = breadCrumbDetail
    ? [breadCrumbSlice, breadCrumbDetail]
    : [breadCrumbSlice];

  const Content = useMemo(() => {
    if (state?.detailKey) {
      return sliceConfig.renderDetail;
    }

    if (state?.slice) {
      return sliceConfig.render;
    }

    return () => <></>;
  }, [
    sliceConfig.render,
    sliceConfig.renderDetail,
    state?.detailKey,
    state?.slice,
  ]);

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
      <Content />
      {state && state.detailKey && (
        <div className="my-s mx-xs">
          <CodeSnippets
            slice={state.slice}
            value={state.detailKey}
            componentVariant={state.componentVariant}
          />
        </div>
      )}
    </Page>
  );
};
