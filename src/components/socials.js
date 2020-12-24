import { h } from 'preact';
import { Affix, Avatar, Popover } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import * as URLS from '../const/urls';
import * as ICONS from '../const/icons';
import { socials } from '../copy';

import style from './style.css';

const content = (
    <div class={style.link}>
        {
            Object.keys(URLS.SOCIALS).map((link) => (
                <p><a href={URLS.SOCIALS[link]} target="_blank">{ICONS.socialIcons[link]} {link}</a></p>
            ))
        }
    </div>
);

const Socials = () => (
    <div class={style.socials}>
        <Popover
            content={content}
            title={socials.otherWaysToGetInTouch}
            placement="topLeft"
        >
            <Affix offsetBottom={10}>
                <Avatar size={64} icon={<EllipsisOutlined />} />
            </Affix>
        </Popover>
    </div>
);

export default Socials;
