export type ModelType = {
    name: string;
    // regexp: string;
};

export type SeriesType = {
    name: string;
    // regexp: string;
    modesl?: ModelType[];
};

export type BrandType = {
    id: string;
    name: string;
    // brand: string[];
    series?: SeriesType[];
};

export type ClassificatorType = BrandType[];

