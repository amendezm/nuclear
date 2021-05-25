/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { HeaderProps, UseRowSelectInstanceProps } from 'react-table';
import { Checkbox } from 'semantic-ui-react';
import { Button } from '../../..';

import { Track } from '../../../types';
import styles from '../styles.scss';

const SelectionHeader: React.FC<HeaderProps<Track> & UseRowSelectInstanceProps<Track>> = ({
  getToggleAllRowsSelectedProps
}) => {
  const checkboxProps = getToggleAllRowsSelectedProps();
  return <span className={styles.select_header}>
    {
      (checkboxProps.checked || checkboxProps.indeterminate) &&
      <span className={styles.select_header_buttons}>
        <Button basic circular size='mini' icon='ellipsis horizontal' />
      </span>
    }
    {/* @ts-ignore */}
    <Checkbox {...checkboxProps} />
  </span>;
};

export default SelectionHeader;