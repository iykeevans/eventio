import { IUserResponse, IUser } from './users'

export interface IEventResponse {
  _id: string
  title: string
  description: string
  startsAt: string
  capacity: number | string
  createdAt: string
  updatedAt: string
  owner: {
    id: string
    _id: string
    firstName: string
    lastName: string
    email: string
  }
  attendees: IUserResponse[]
}

export interface IEvent {
  id: string
  title: string
  description: string
  startsAt: string
  capacity: number | string
  createdAt: string
  updatedAt: string
  owner: IUser
  attendees: readonly IUser[]
}
