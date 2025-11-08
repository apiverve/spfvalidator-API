declare module '@apiverve/spfvalidator' {
  export interface spfvalidatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface spfvalidatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class spfvalidatorWrapper {
    constructor(options: spfvalidatorOptions);

    execute(callback: (error: any, data: spfvalidatorResponse | null) => void): Promise<spfvalidatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spfvalidatorResponse | null) => void): Promise<spfvalidatorResponse>;
    execute(query?: Record<string, any>): Promise<spfvalidatorResponse>;
  }
}
