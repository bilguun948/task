export type Dept = {
  id: number;
  parentId: number | null;
  name: string;
};

export const departments: Dept[] = [
  { id: 1, parentId: null, name: 'A1' },
  { id: 2, parentId: null, name: 'B1' },
  { id: 3, parentId: null, name: 'C1' },
  { id: 4, parentId: 1, name: 'A1.1' },
  { id: 5, parentId: 1, name: 'A1.2' },
  { id: 6, parentId: 2, name: 'B1.1' },
  { id: 10, parentId: 4, name: 'A1.1.1' },
  { id: 11, parentId: 4, name: 'A1.1.2' },
];

export function getParentDepartments(id: number, list: Dept[]): Dept[] {
  const result: Dept[] = [];
  const current = list.find((d) => d.id === id);
  if (!current) return result;
  if (current.parentId !== null) {
    const parent = list.find((d) => d.id === current.parentId);
    if (parent) {
      result.push(parent);
      result.push(...getParentDepartments(parent.id, list));
    }
  }
  return result;
}
