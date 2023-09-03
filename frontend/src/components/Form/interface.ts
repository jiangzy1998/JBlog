export type StoreValue = any;
export type Store = Record<string, StoreValue>;
export type NamePath = string | number;

export interface Callbacks<Values = any> {
  onFinish?: (values: Values) => void; 
  onFinishFailed?: (Values: Values) => void;
}

export interface FormInstance<Values = any>{
  getFieldValue:(name:NamePath) => StoreValue;
  getFieldsValue:() => Values;
  submit:() => void;
  setFieldsValue:(newStore: Store) => void;
  setCallbacks:(callbacks:Callbacks) => void;
  registerFieldEntities: (entity: FieldEntity) => void;
}

export type Rule = { required:boolean, message:string };

export interface FieldEntity {
  props:{
    name?:NamePath;
    rules?:Rule[];
  };
  onStoreChange: ()=> void;
}
