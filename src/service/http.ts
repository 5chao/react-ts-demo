class AxiosHttp {

    public static initIntercept(http: any): void {

        http.interceptors.request.use((config: any) => {
            config.headers.token = Math.random().toString().substring(1)
            return config
        })

        http.interceptors.response.use((response: any) => {
            console.log('|----response---', response)
            return response.data
        })
        
    }


}

export default AxiosHttp