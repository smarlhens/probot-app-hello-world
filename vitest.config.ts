import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['test/**/*.test.ts'],
    clearMocks: true,
    restoreMocks: true,
    mockReset: true,
    coverage: {
      provider: 'c8',
      clean: true,
      cleanOnRerun: true,
      reporter: ['cobertura', 'text', 'html'],
      include: ['src/*'],
    },
  },
});
