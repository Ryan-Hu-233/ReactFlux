import {
  Divider,
  InputNumber,
  Select,
  Switch,
  Typography,
} from "@arco-design/web-react";
import { useStore } from "@nanostores/react";
import { polyglotState } from "../../hooks/useLanguage";
import { settingsState, updateSettings } from "../../store/settingsState";
import "./General.css";

const General = () => {
  const { homePage, markReadOnScroll, orderBy, pageSize, removeDuplicates } =
    useStore(settingsState);
  const { polyglot } = useStore(polyglotState);

  return (
    <>
      <div className="setting-row">
        <div>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {polyglot.t("settings.default_home_page_label")}
          </Typography.Title>
          <Typography.Text type="secondary">
            {polyglot.t("settings.default_home_page_description")}
          </Typography.Text>
        </div>
        <div>
          <Select
            className="input-select"
            onChange={(value) => updateSettings({ homePage: value })}
            value={homePage}
          >
            <Select.Option value="all">
              {polyglot.t("settings.default_home_page_option_all")}
            </Select.Option>
            <Select.Option value="today">
              {polyglot.t("settings.default_home_page_option_today")}
            </Select.Option>
            <Select.Option value="starred">
              {polyglot.t("settings.default_home_page_option_starred")}
            </Select.Option>
            <Select.Option value="history">
              {polyglot.t("settings.default_home_page_option_history")}
            </Select.Option>
          </Select>
        </div>
      </div>
      <Divider />
      <div className="setting-row">
        <div>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {polyglot.t("settings.entries_order_label")}
          </Typography.Title>
          <Typography.Text type="secondary">
            {polyglot.t("settings.entries_order_description")}
          </Typography.Text>
        </div>
        <div>
          <Select
            className="input-select"
            onChange={(value) => updateSettings({ orderBy: value })}
            value={orderBy}
          >
            <Select.Option value="published_at">
              {polyglot.t("settings.entries_order_option_published_at")}
            </Select.Option>
            <Select.Option value="created_at">
              {polyglot.t("settings.entries_order_option_created_at")}
            </Select.Option>
          </Select>
        </div>
      </div>
      <Divider />
      <div className="setting-row">
        <div>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {polyglot.t("settings.entries_per_page_label")}
          </Typography.Title>
          <Typography.Text type="secondary">
            {polyglot.t("settings.entries_per_page_description")}
          </Typography.Text>
        </div>
        <div>
          <InputNumber
            className="input-select"
            defaultValue={pageSize}
            min={1}
            mode="button"
            onChange={(value) => updateSettings({ pageSize: value })}
            size="small"
          />
        </div>
      </div>
      <Divider />
      <div className="setting-row">
        <div>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {polyglot.t("settings.remove_duplicates_label")}
          </Typography.Title>
          <Typography.Text type="secondary">
            {polyglot.t("settings.remove_duplicates_description")}
          </Typography.Text>
        </div>
        <div>
          <Select
            className="input-select"
            onChange={(value) => updateSettings({ removeDuplicates: value })}
            value={removeDuplicates}
          >
            <Select.Option value="none">
              {polyglot.t("settings.remove_duplicates_option_none")}
            </Select.Option>
            <Select.Option value="hash">
              {polyglot.t("settings.remove_duplicates_option_hash")}
            </Select.Option>
            <Select.Option value="title">
              {polyglot.t("settings.remove_duplicates_option_title")}
            </Select.Option>
            <Select.Option value="url">
              {polyglot.t("settings.remove_duplicates_option_url")}
            </Select.Option>
          </Select>
        </div>
      </div>
      <Divider />
      <div className="setting-row">
        <div>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {polyglot.t("settings.mark_read_on_scroll_label")}
          </Typography.Title>
          <Typography.Text type="secondary">
            {polyglot.t("settings.mark_read_on_scroll_description")}
          </Typography.Text>
        </div>
        <div>
          <Switch
            checked={markReadOnScroll}
            onChange={(value) => updateSettings({ markReadOnScroll: value })}
          />
        </div>
      </div>
    </>
  );
};

export default General;
