import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Button } from '../Button';
import { BsArrowsMove } from 'react-icons/bs';
import { Badge } from '../ui/badge';

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'w-64 h-full p-4 m-4 bg-slate-100 rounded-xl shadow-lg hover:shadow-sm hover:shadow-cyan-500/50 shadow-cyan-500/50 flex flex-col gap-y-4',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col  items-center">
          <h1 className="text-gray-800 text-xl">
            <Badge className='bg-slate-900 text-white underline decoration-white p-2 ' variant='outline'>
              {title}
            </Badge>
          </h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <button
          className="border p-2 flex flex-row items-center justify-center text-xs rounded-xl hover:bg-green-100  hover:shadow-sm"
          {...listeners}
        >
          Move column  <BsArrowsMove size={24} className='px-1 hover:scale-90'/>

        </button>
      </div>

      {children}
      <Button variant="ghost" onClick={onAddItem} className='bg-green-400 hover:border-green-900 hover:border-4'>
        Add Item
      </Button>
    </div>
  );
};

export default Container;
