import { DataActionCreators } from './../../store/action-creators';
import { Data } from "../../store/states";

export type Props = Data & typeof DataActionCreators;