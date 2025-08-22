# Appian Selenium Page Object Model - Complete Extraction Documentation

## Overview

This document provides a comprehensive extraction and documentation of the Page Object Model (POM) structure from the Appian Selenium framework. The extraction identifies and isolates the key components that make up the POM pattern implementation in the Appian testing framework.

## Architecture Overview

The Appian Selenium framework implements a sophisticated Page Object Model with the following key architectural patterns:

### 1. Factory Pattern Implementation
- **TempoFieldFactory**: Central factory that dynamically determines field types and delegates operations
- **AbstractTempoField**: Base class for all field implementations
- **Type Detection**: Automatic field type identification based on DOM structure

### 2. Interface-Based Design
The framework implements multiple interfaces for consistent behavior across components:
- **Populateable**: For setting field values
- **Verifiable**: For verifying field contents
- **Clearable**: For clearing field values
- **Clickable**: For interactive elements
- **WaitFor**: For synchronization
- **Captureable**: For extracting field values

## Core Page Objects Extracted

### Main Page Objects

#### 1. TempoLogin
**Purpose**: Handles authentication and session management
**Key Methods**:
- `login(url, username, password, withTerms)` - Main login functionality
- `logout()` - Session termination
- `waitFor()` - Wait for login completion
- `waitForLogin()` - Wait for login page elements
- `waitForTerms()` - Wait for terms and conditions
- `navigateToLoginPage(url)` - Navigate to login page

**Key Locators**:
```xpath
//form[@id = 'loginForm']/descendant::input[contains(@class, 'btn')]  // Submit button
//a[contains(text(),'Sign Out')]  // Logout link
//input[@id='un' or @name='un' or @value='un' or text()='un']  // Username field
```

#### 2. TempoMenu
**Purpose**: Navigation menu interactions
**Interfaces**: WaitFor, Clickable
**Key Methods**:
- `click(menuName)` - Click menu item
- `waitFor(menuName)` - Wait for menu availability

**Key Locators**:
```xpath
//a[starts-with(@class, 'appian-menu-item') and contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜÑÇ','abcdefghijklmnopqrstuvwxyzáéíóúüñç'),%1$s)]
```

#### 3. TempoSearch
**Purpose**: Search functionality
**Key Locators**:
```xpath
//div[contains(@class, 'appian-tempo-search')]/descendant::input
```

## Field Component Architecture

### Core Field Types

#### 1. TempoTextField
**Purpose**: Single-line text input fields
**Detection Pattern**: `input[contains(@class, 'aui-TextInput')]`
**Methods**: populate, capture, clear, contains, isNotBlank

#### 2. TempoDropdownField
**Purpose**: Select/dropdown fields
**Detection Pattern**: `select`
**Methods**: selectOption, getSelectedValue, populate, capture

#### 3. TempoCheckboxField
**Purpose**: Checkbox input fields
**Detection Pattern**: `input[@type='checkbox']`
**Methods**: check, uncheck, isChecked, toggle

#### 4. TempoFileUploadField
**Purpose**: File upload functionality
**Detection Pattern**: `input[contains(@class, 'gwt-FileUpload')]`
**Methods**: uploadFile, removeFile, getFileName, isUploadComplete

#### 5. TempoGrid
**Purpose**: Data grid/table components
**Key Features**:
- Row and column navigation
- Cell manipulation
- Add/remove rows
- Pagination support
- Selection management

**Grid Operations**:
```javascript
// Get cell value
grid.getCell(rowIndex, columnIndex)

// Add new row
grid.addRow()

// Navigate pages
grid.navigateToPage('next')
grid.navigateToPage('previous')
```

### Advanced Components

#### 1. TempoPickerField
**Purpose**: Auto-complete/suggestion fields
**Key Features**:
- Type-ahead suggestions
- Multiple selection support
- Custom suggestion matching

#### 2. TempoDateField & TempoDatetimeField
**Purpose**: Date and datetime input handling
**Key Features**:
- Calendar widget interaction
- Date format validation
- Time zone handling

## XPath Patterns and Conventions

### Text Transformation Pattern
The framework uses consistent case-insensitive text matching:
```xpath
translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜÑÇ','abcdefghijklmnopqrstuvwxyzáéíóúüñç')
```

### Field Layout Structure
All form fields follow a consistent container structure:
```xpath
//*[(self::label or self::span) and starts-with(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜÑÇ','abcdefghijklmnopqrstuvwxyzáéíóúüñç'),%1$s)]/parent::*/following-sibling::div/descendant::div[contains(@class, 'aui_FieldLayout_InputContainer')]
```

### Common Selector Patterns

#### Field Identification
- **By Label**: `//label[contains(text(), 'Field Name')]/following-sibling::input`
- **By Index**: `(//input[@type='text'])[1]` (first text field)
- **By Class**: `//input[contains(@class, 'aui-TextInput')]`
- **By Container**: `//div[contains(@class, 'field-container')]//input`

#### Button Selectors
- **Standard Button**: `//button[contains(text(), 'Button Text')]`
- **Disabled State**: `//button[contains(text(), 'Button Text') and not(contains(@class, 'button-disabled'))]`
- **Icon Button**: `//button[@aria-label='Button Description']`

#### Navigation Elements
- **Menu Items**: `//a[starts-with(@class, 'appian-menu-item')]`
- **Breadcrumbs**: `//nav[@aria-label='breadcrumb']//a`
- **Tabs**: `//div[@role='tablist']//button`

## Factory Pattern Implementation

### TempoFieldFactory Workflow

```java
// 1. Get field layout element
WebElement fieldLayout = TempoField.getInstance(settings).getWebElement(fieldName);

// 2. Determine field type dynamically
AbstractTempoField field = fieldFactory.getFieldType(fieldLayout);

// 3. Execute operation based on type
field.populate(fieldLayout, fieldValue);
```

### Supported Field Type Detection

The factory automatically detects field types in this priority order:

1. **TempoGrid** - Data grid components
2. **TempoTextField** - Text input fields
3. **TempoEncryptedTextField** - Password/encrypted fields
4. **TempoParagraphField** - Multi-line text areas
5. **TempoDropdownField** - Select dropdowns
6. **TempoRadioField** - Radio button groups
7. **TempoCheckboxField** - Checkbox fields
8. **TempoFileUploadField** - File upload inputs
9. **TempoDatetimeField** - Date and time fields
10. **TempoDateField** - Date-only fields
11. **TempoImageField** - Image display fields
12. **TempoPickerField** - Auto-complete fields
13. **TempoMilestoneField** - Progress milestone fields
14. **TempoLinkField** - Hyperlink fields
15. **TempoBarcodeField** - Barcode display fields
16. **TempoGaugeField** - Gauge/progress indicators
17. **TempoButton** - Button elements
18. **TempoTagField** - Tag display fields
19. **TempoReadOnlyField** - Read-only content

## Action Patterns

### Common Test Actions

#### 1. Field Population
```java
// Using factory pattern (recommended)
fieldFactory.populate("Username", "testuser");
fieldFactory.populate("Email", "test@example.com");

// Direct field access (when field type is known)
TempoTextField textField = TempoTextField.getInstance(settings);
WebElement fieldLayout = textField.getWebElement("Username");
textField.populate(fieldLayout, "testuser");
```

#### 2. Field Verification
```java
// Verify field contains value
boolean containsValue = fieldFactory.contains("Username", "testuser");

// Verify field is not blank
boolean isNotBlank = fieldFactory.isNotBlank("Username");

// Capture current value
String currentValue = fieldFactory.capture("Username");
```

#### 3. Interactive Elements
```java
// Click buttons
button.click("Submit");
button.click("Cancel");

// Wait for elements
button.waitFor("Submit");
field.waitFor("Username");
```

#### 4. Grid Operations
```java
// Grid cell operations
String cellValue = grid.getCell(1, 2); // Row 1, Column 2
grid.populateCell(1, 2, "New Value");

// Row management
grid.addRow();
int rowCount = grid.getRowCount();

// Selection management
grid.selectRow(1);
grid.selectAll();
```

## Best Practices Extracted

### 1. Locator Strategy
- **Prefer semantic locators** over fragile XPath/CSS
- **Use data attributes** when available for test-specific hooks
- **Avoid brittle selectors** that depend on DOM structure changes

### 2. Page Object Design
- **Single responsibility** per page object
- **Encapsulate implementation details** from test scripts
- **Use meaningful method names** that describe business actions
- **Return self-references** for method chaining when appropriate

### 3. Synchronization
- **Use explicit waits** over implicit waits
- **Wait for specific conditions** rather than fixed delays
- **Handle dynamic content** with appropriate wait strategies

### 4. Field Factory Usage
- **Leverage factory pattern** for automatic field type detection
- **Avoid direct field instantiation** when factory can handle it
- **Extend factory** for custom field types when needed

### 5. Error Handling
- **Provide meaningful error messages** with context
- **Include field names and values** in error reporting
- **Fail fast** with clear indication of what went wrong

## Migration Considerations

### From Direct Selenium to POM
```java
// Before (Direct Selenium)
driver.findElement(By.xpath("//input[@id='username']")).sendKeys("user");

// After (Using POM)
loginPage.enterUsername("user");
```

### Benefits of Extracted POM
1. **Maintainability**: Centralized locator management
2. **Reusability**: Common operations available across tests
3. **Readability**: Test scripts read like business requirements
4. **Reliability**: Consistent interaction patterns
5. **Scalability**: Easy to extend for new field types

## Configuration and Constants

### Version-Specific Selectors
The framework uses version-specific selector configurations stored in `metadata.json`:
- XPath expressions vary by Appian version
- Localization support for multiple languages
- Theme-specific selectors for different UI versions

### Settings Management
```java
Settings settings = Settings.initialize();
settings.setVersion("7.10");
settings.setLocale("en");
settings.setTimeoutSeconds(10);
```

## Integration with Test Frameworks

### Example Test Implementation
```java
public class LoginTest {
    private Settings settings;
    private TempoLogin loginPage;

    @Before
    public void setUp() {
        settings = Settings.initialize();
        loginPage = TempoLogin.getInstance(settings);
    }

    @Test
    public void testSuccessfulLogin() {
        loginPage.login("https://appian.example.com", "username", "password", false);
        loginPage.waitFor();

        // Verify login successful
        TempoMenu menu = TempoMenu.getInstance(settings);
        menu.waitFor("Home");
    }
}
```

This comprehensive extraction provides a complete blueprint for implementing the Appian Page Object Model pattern in any test automation framework, whether using Selenium, Playwright, or other web automation tools.