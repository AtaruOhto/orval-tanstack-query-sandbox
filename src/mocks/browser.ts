// src/mocks/browser.js
import { setupWorker } from 'msw/browser'
import { getPetsMock } from 'src/api/pets/pets.msw'
 
export const worker = setupWorker(...getPetsMock())