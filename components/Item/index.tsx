import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { BsArrowsMove } from 'react-icons/bs';

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'item',
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'm-auto w-56  bg-white break-all rounded-xl border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex hover:border-green-800 hover:border-2 p-0.5 hover:p-0 rounded-lg items-center text-xs justify-between r">
        {title}
        <button
          className=" p-2 text-xs rounded-xl hover:shadow-sm hover:bg-green-200"
          {...listeners}
        >
          <BsArrowsMove size={16} className='hover:scale-75 transition ' />
        </button>
      </div>
    </div>
  );
};

export default Items;
