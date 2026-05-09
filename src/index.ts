/**
 * CE.SDK Form-Based Template Adoption Starterkit - Main Entry Point
 *
 * Demonstrates form-based template editing where users modify template
 * content through structured form controls instead of direct canvas manipulation.
 *
 * Features:
 * - Edit images through file upload controls
 * - Edit text through form inputs
 * - Edit colors across all elements
 * - Simplified UI with hidden dock/inspector
 *
 * @see https://img.ly/docs/cesdk/js/features/
 */

import CreativeEditorSDK, { Configuration } from '@cesdk/cesdk-js';

import { initFormBasedTemplateAdoption } from './imgly';
import { resolveAssetPath } from './resolveAssetPath';

// ============================================================================
// Scene URL
// ============================================================================

const SCENE_ARCHIVE_URL = resolveAssetPath(
  '/cases/form-based-template-adoption/scene.archive'
);

// ============================================================================
// Configuration
// ============================================================================

const config: Configuration = {
  userId: 'starterkit-form-based-template-adoption-user',

  // IMG.LY CDN (for quick testing only, NOT recommended for production)

  // Local assets for development

};

// ============================================================================
// Initialize Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize with form-based template adoption configuration
    await initFormBasedTemplateAdoption(cesdk);

    // Load the template scene
    await cesdk.engine.scene.loadFromArchiveURL(SCENE_ARCHIVE_URL);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
