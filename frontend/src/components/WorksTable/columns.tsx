import type { Work } from '@/models/Work';
import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '../ui/badge';

export const columns: ColumnDef<Work>[] = [
  {
    accessorKey: 'id',
    header: () => <div className="text-left"># ID</div>,
    cell: ({ row }) => {
      return <div className="text-left font-medium">{row.getValue('id')}</div>;
    },
  },
  {
    accessorKey: 'artist',
    header: 'Artist',
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue('artist')}</div>
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue('title')}</div>
      );
    },
  },
  {
    accessorKey: 'credits',
    header: 'Credits',
    cell: ({ row }) => {
      const credits: string[] = Array.isArray(row.getValue('credits'))
        ? row.getValue('credits')
        : [];

      return (
        <div className="flex flex-wrap gap-1">
          {credits.length > 0 ? (
            credits.map((credit, index) => (
              <Badge key={index} variant="outline">
                {credit}
              </Badge>
            ))
          ) : (
            <span className="text-muted-foreground">No credits</span>
          )}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const work = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit {work.id}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete {work.id}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
