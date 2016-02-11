/** @babel */
import {ComponentRegistry} from 'nylas-exports'
import SendLaterButton from './send-later-button'
import SendLaterStore from './send-later-store'

export function activate() {
  ComponentRegistry.register(SendLaterButton, {role: 'Composer:ActionButton'})
  this.sendLaterStore = new SendLaterStore()
}

export function deactivate() {
  ComponentRegistry.unregister(SendLaterButton)
}

export function serialize() {

}

