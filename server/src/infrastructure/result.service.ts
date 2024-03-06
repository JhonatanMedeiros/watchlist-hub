export interface ServiceResult<T> {
  errors?: string[]
  data?: T
}

export const createServiceResult = <T>(errors?: string[], data?: T): ServiceResult<T> => ({
  errors,
  data
})

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const createErrorServiceResult = <T>(...message: string[]): ServiceResult<T> => createServiceResult<T>([...message], null!)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const createSuccessServiceResult = <T>(data: T): ServiceResult<T> => createServiceResult<T>(null!, data)
