/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */
import type { VehicleDefinitions } from '../../..';
import fuel from './fuel';
import manufacturer from './manufacturer';
import model from './model';
import type_ from './type';

const vehicle: Partial<VehicleDefinitions> = {
  fuel,
  manufacturer,
  model,
  type: type_,
};

export default vehicle;
