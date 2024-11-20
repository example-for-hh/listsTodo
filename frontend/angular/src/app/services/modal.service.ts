import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false)
  private modalTypeSubject = new BehaviorSubject<string | null>(null)
  private modalPropsSubject = new BehaviorSubject<any | null>(null)

  isOpen$ = this.isOpenSubject.asObservable()
  modalType$ = this.modalTypeSubject.asObservable()
  modalProps$ = this.modalPropsSubject.asObservable()

  open(type: string, props?: any) {
    this.isOpenSubject.next(true)
    this.modalTypeSubject.next(type)
    this.modalPropsSubject.next(props)
  }

  close(type: string) {
    this.modalTypeSubject.next(type)
    this.isOpenSubject.next(false)
    this.modalPropsSubject.next(null)
  }
}
