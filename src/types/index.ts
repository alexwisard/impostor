import React from "react";

export interface WithChildren {
    children?: React.ReactNode;
}

export interface WithClass {
    className?: string;
}

export interface WithChildrenAndClass extends WithChildren, WithClass { }
