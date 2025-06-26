
    export type RemoteKeys = 'react_remote/IncrementButton';
    type PackageType<T> = T extends 'react_remote/IncrementButton' ? typeof import('react_remote/IncrementButton') :any;