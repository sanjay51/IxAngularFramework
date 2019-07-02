export class Resource {
    public resourceId: string = null;
    public resourceName: string;

    public constructor(resourceName: string) {
        this.resourceName = resourceName;
    };

    public withResourceId(resourceId: string): Resource {
        this.resourceId = resourceId;
        return this;
    }

    public static constructUrl(baseUrl: string, resource: Resource): string {
        let url = baseUrl;

        if (! url.endsWith("/")) 
            url += "/";

        url += resource.resourceName;

        if (resource.resourceId) {
            url = url + "/" + resource.resourceId;
        }

        return url;
    }

}