import ReactDOM from "react-dom";
import { ReactElement } from "react";

interface IPortalAwareItem {
  provided: any;
  snapshot: any;
  portal: any;
  content: ReactElement;
  className: string;
  params?: any;
}

export function PortalAwareItem({
  provided,
  snapshot,
  portal,
  content,
  className,
  params,
}: IPortalAwareItem) {
  const usePortal = snapshot.isDragging;

  const child = (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      inPortal={usePortal}
      className={className}
      style={{
        ...provided.draggableProps.style,
      }}
      {...params}
    >
      {content}
    </div>
  );

  if (!usePortal) {
    return child;
  }

  // if dragging - put the item in a portal
  return ReactDOM.createPortal(child, portal);
}
