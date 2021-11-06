import {NavLink} from 'react-router-dom';
import routes from '../../routes';

import s from './LinkToReport.module.scss';
import sprite from '../../base/images/sprite.svg';

export const LinkToReport = () => (
	<NavLink to={routes.report} className={s.reportLink}>
		<span className={s.reportText}>Перейти к отчетам</span>
		<svg width="24" height="24" className={s.barIcon}>
			<use href={sprite + '#icon-bar_chart'}/>
		</svg>
	</NavLink>
);

