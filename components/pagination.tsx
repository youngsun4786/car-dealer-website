import {
  Pagination as NextUIPagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@nextui-org/pagination";

import { ChevronIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const renderItem = ({
  ref,
  key,
  value,
  isActive,
  onNext,
  onPrevious,
  setPage,
  className,
}: PaginationItemRenderProps) => {
  if (value === PaginationItemType.NEXT) {
    return (
      <button
        key={key}
        className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
        onClick={onNext}
      >
        <ChevronIcon className="rotate-180" />
      </button>
    );
  }

  if (value === PaginationItemType.PREV) {
    return (
      <button
        key={key}
        className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
        onClick={onPrevious}
      >
        <ChevronIcon />
      </button>
    );
  }

  if (value === PaginationItemType.DOTS) {
    return (
      <button key={key} className={className}>
        ...
      </button>
    );
  }

  // cursor is the default item
  return (
    <button
      key={key}
      ref={ref}
      className={cn(
        className,
        isActive &&
          "text-white bg-gradient-to-br from-slate-300 to-slate-950 font-bold"
      )}
      onClick={() => setPage(value)}
    >
      {value}
    </button>
  );
};

const Pagination = () => {
  return (
    <>
      <NextUIPagination
        disableCursorAnimation
        showControls
        className="gap-2"
        initialPage={1}
        radius="full"
        renderItem={renderItem}
        total={10}
        variant="light"
      />
    </>
  );
};

export default Pagination;
