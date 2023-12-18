/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import * as axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export type ListPetsParams = {
/**
 * How many items to return at one time (max 100)
 */
limit?: number;
};

export interface Error {
  code: number;
  message: string;
}

export interface Pet {
  id: number;
  name: string;
  tag?: string;
}

export type Pets = Pet[];





  /**
 * @summary List all pets
 */
export const listPets = <TData = AxiosResponse<Pets>>(
    params?: ListPetsParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.default.get(
      `/pets`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * @summary Create a pet
 */
export const createPets = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.default.post(
      `/pets`,undefined,options
    );
  }

/**
 * @summary Info for a specific pet
 */
export const showPetById = <TData = AxiosResponse<Pet>>(
    petId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.default.get(
      `/pets/${petId}`,options
    );
  }

export type ListPetsResult = AxiosResponse<Pets>
export type CreatePetsResult = AxiosResponse<void>
export type ShowPetByIdResult = AxiosResponse<Pet>
