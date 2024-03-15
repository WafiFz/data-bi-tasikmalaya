import id_json from './id.json'
import en_json from './en.json'

export interface Messages {
  [key: string]: string
}

interface Languages {
  [key: string]: Messages;
}

export const languages: Languages = {
  id: id_json,
  en: en_json
};
