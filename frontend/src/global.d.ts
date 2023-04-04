declare type FC<T> = import('react').FC<T>
declare type HTMLProps<T> = import('react').HTMLProps<T>
declare type FCWithHTMLProps<T, E = {}> = FC<HTMLProps<T> & E>
