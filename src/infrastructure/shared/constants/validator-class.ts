// LOGIN DTO
export const EMAIL_LENGTH_RULE_PATTERN = /^[a-zA-Z0-9_]{4,20}$/
export const EMAIL_LENGTH_RULE_PATTERN_MSG = 'User must be 4-20 characters, only letters, numbers, and underscores are allowed.'
export const PASSWORD_RULE_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/
export const PASSWORD_RULE_PATTERN_MSG = 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
export const PASSWORD_LENGTH_MSG =  'Password must be at least 8 characters long.'