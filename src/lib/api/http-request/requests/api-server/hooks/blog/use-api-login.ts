import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { API_NAME } from "../../constants";
import { ApiLoginRequest, ApiLoginResponse, postLogin } from "../../endpoints/user";
import { IResponseError } from "../../endpoints/interfaces/response.interface";

export const useApiLogin = (options?: MutationObserverOptions<ApiLoginResponse, IResponseError, ApiLoginRequest>) => {
    return useMutation<ApiLoginResponse, IResponseError, ApiLoginRequest>({
        mutationKey: [API_NAME, "login"],
        mutationFn: async (data: ApiLoginRequest) => postLogin(data),
        ...baseUseMutationOptions,
        ...options,
    });
};
