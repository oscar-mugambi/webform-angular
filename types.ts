export type TJoinCodeKey = 'ICEA' | 'SYSTEM_TEST' | 'RANDOM';
export type TJoinCode = 'IVA3BXOP' | 'MWAMBATEST' | 'UDJ615';

export type TJoinCodeArgs = {
  code: TJoinCode;
  label: string;
};

export const joinCodes: { [key in TJoinCodeKey]: TJoinCodeArgs } = {
  ICEA: { code: 'IVA3BXOP', label: 'ICEA' },
  SYSTEM_TEST: { code: 'MWAMBATEST', label: 'SYSTEM_TEST' },
  RANDOM: { code: 'UDJ615', label: 'RANDOM' },
};
