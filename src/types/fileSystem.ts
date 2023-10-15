export interface File {
  name: string;
  content: string;
}

export interface Folder {
  name: string;
  children: Array<File | Folder>;
  reference?: Array<number>;
}

export function isAFile(f: File | Folder): f is File {
  return "content" in f;
}

export function isAFolder(f: File | Folder): f is Folder {
  return "children" in f;
}
