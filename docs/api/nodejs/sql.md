---
title: sql
description: 常用的 sql 语句。
outline: [2, 3]
---

# 常用的 sql 语句

## 清空数据库表数据

注意不会删除表, 但是会删除表内 **`所有数据`**

```sql
-- 设置分隔符以支持存储过程
DELIMITER $$

-- 创建存储过程
CREATE PROCEDURE truncate_all_tables()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE tbl_name VARCHAR(255);
    DECLARE cur CURSOR FOR
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'ocr'
          AND table_type = 'BASE TABLE';
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    -- 禁用外键检查
    SET FOREIGN_KEY_CHECKS = 0;

    -- 打开游标并循环处理
    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO tbl_name;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- 动态生成并执行 TRUNCATE
        SET @sql = CONCAT('TRUNCATE TABLE `', tbl_name, '`;');
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END LOOP;

    -- 清理和恢复设置
    CLOSE cur;
    SET FOREIGN_KEY_CHECKS = 1;
END$$

-- 恢复默认分隔符
DELIMITER ;

-- 调用存储过程
CALL truncate_all_tables();

-- 删除存储过程（可选）
DROP PROCEDURE truncate_all_tables;
```
