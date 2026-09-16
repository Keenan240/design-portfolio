const PASSCODE = "6108";

export function passcodeStorageKey(projectId: string) {
  return `case-study-unlock:${projectId}`;
}

export function isPasscodeCorrect(value: string) {
  return value === PASSCODE;
}

export function readPasscodeUnlock(projectId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(passcodeStorageKey(projectId)) === "1";
  } catch {
    return false;
  }
}

export function writePasscodeUnlock(projectId: string) {
  try {
    sessionStorage.setItem(passcodeStorageKey(projectId), "1");
  } catch {
    // ignore quota / private mode
  }
}

export const SCOTIA_PASSCODE_PROJECT_ID = "scotiabank-unreleased-feature";
