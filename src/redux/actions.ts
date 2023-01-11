export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => ({
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN, amountOfCurrency
} as const);

export type ChangeAction = ReturnType<typeof ChangeActionAC>


export const ChangeActionAC = (isBuying: boolean) => ({
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, isBuying
} as const);

export type ChangeCurrentCurrencyType = ReturnType<typeof СhangeCurrentCurrencyAC>


export const СhangeCurrentCurrencyAC = (currentCurrency: string) => ({
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, currentCurrency
} as const)

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;
