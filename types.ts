export type TJoinCodeKey = 'ICEA' | 'SYSTEM_TEST' | 'RANDOM';
export type TJoinCode = 'IVA3BXOP' | 'MWAMBATEST' | 'I2SSQB';

export type TJoinCodeArgs = {
  code: TJoinCode;
  label: string;
};

export const joinCodes: { [key in TJoinCodeKey]: TJoinCodeArgs } = {
  ICEA: { code: 'IVA3BXOP', label: 'ICEA' },
  SYSTEM_TEST: { code: 'MWAMBATEST', label: 'SYSTEM_TEST' },
  RANDOM: { code: 'I2SSQB', label: 'RANDOM' },
};
