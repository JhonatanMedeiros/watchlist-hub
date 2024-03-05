export interface ServiceResult<T> {
  errors?: string[]
  data?: T
}

export const createServiceResult = <T>(errors?: string[], data?: T): ServiceResult<T> => ({
  errors,
  data
})

export const createErrorServiceResult = <T>(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...message: string[]): ServiceResult<T> => createServiceResult<T>([...message], null!)

export const createSuccessServiceResult = <T>(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  data: T): ServiceResult<T> => createServiceResult<T>(null!, data)
