/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  Error,
  ListPetsParams,
  Pet,
  Pets
} from '../../model'



/**
 * @summary List all pets
 */
export const listPets = (
    params?: ListPetsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pets>> => {
    
    return axios.default.get(
      `/pets`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getListPetsQueryKey = (params?: ListPetsParams,) => {
    return [`/pets`, ...(params ? [params]: [])] as const;
    }

    
export const getListPetsQueryOptions = <TData = Awaited<ReturnType<typeof listPets>>, TError = AxiosError<Error>>(params?: ListPetsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getListPetsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({ signal }) => listPets(params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> & { queryKey: QueryKey }
}

export type ListPetsQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>
export type ListPetsQueryError = AxiosError<Error>

/**
 * @summary List all pets
 */
export const useListPets = <TData = Awaited<ReturnType<typeof listPets>>, TError = AxiosError<Error>>(
 params?: ListPetsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getListPetsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Create a pet
 */
export const createPets = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.default.post(
      `/pets`,undefined,options
    );
  }



export const getCreatePetsMutationOptions = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createPets>>, TError,void, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof createPets>>, TError,void, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createPets>>, void> = () => {
          

          return  createPets(axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<typeof createPets>>>
    
    export type CreatePetsMutationError = AxiosError<Error>

    /**
 * @summary Create a pet
 */
export const useCreatePets = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createPets>>, TError,void, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getCreatePetsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Info for a specific pet
 */
export const showPetById = (
    petId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    
    return axios.default.get(
      `/pets/${petId}`,options
    );
  }


export const getShowPetByIdQueryKey = (petId: string,) => {
    return [`/pets/${petId}`] as const;
    }

    
export const getShowPetByIdQueryOptions = <TData = Awaited<ReturnType<typeof showPetById>>, TError = AxiosError<Error>>(petId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({ signal }) => showPetById(petId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(petId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData> & { queryKey: QueryKey }
}

export type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>
export type ShowPetByIdQueryError = AxiosError<Error>

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <TData = Awaited<ReturnType<typeof showPetById>>, TError = AxiosError<Error>>(
 petId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowPetByIdQueryOptions(petId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



