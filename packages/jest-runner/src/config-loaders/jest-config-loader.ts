/**
 * The JestConfigLoader interface is used to load different kinds of configurations for Jest.
 * Custom JestConfigLoaders should implement this interface, the OptionsEditor will then be able to use it to load a Jest configuration.
 *
 * JestConfigLoaders are typically used for projects that do not provide their configuration via the package.json file (e.g. React).
 * The loadConfig method will return a usable config for Jest to use.
 */

import { Config } from '@jest/types';

export interface JestConfigLoader {
  /*
   * Load the JSON representation of a Jest Configuration.
   *
   * @return {JestConfiguration} an object containing the Jest configuration.
   */
  loadConfig(): Config.InitialOptions;
}

export interface JestConfigLoaderAsync {
  /*
   * Load the JSON representation of a Jest Configuration.
   *
   * @return {JestConfiguration} a Promise with an object containing the Jest configuration.
   */
  loadConfig(): Promise<Config.InitialOptions>;
}
