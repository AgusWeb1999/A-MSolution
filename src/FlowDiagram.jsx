// Visual "nodes connected by a flow" diagram built with plain HTML/CSS
// (no image/library) — used in the hero as an ambient illustration, and
// reused in the interactive demo where `activeIndex` drives real progress.
export default function FlowDiagram({ nodes, variant = 'hero', activeIndex = -1 }) {
  return (
    <div className={`flow-diagram flow-diagram-${variant}`} role={variant === 'demo' ? 'group' : 'img'} aria-label={variant === 'hero' ? 'Diagrama de un flujo de automatización' : undefined}>
      {nodes.map((node, i) => (
        <div className="flow-segment" key={node.label}>
          <div
            className={
              'flow-node' +
              (variant === 'demo' && i === activeIndex ? ' flow-node-active' : '') +
              (variant === 'demo' && i < activeIndex ? ' flow-node-done' : '')
            }
          >
            <span className="flow-node-icon">
              <node.icon width={20} height={20} />
            </span>
            <span className="flow-node-label">{node.label}</span>
          </div>
          {i < nodes.length - 1 && (
            <div className="flow-connector">
              <span
                className="flow-connector-fill"
                style={variant === 'demo' ? { '--fill': i < activeIndex ? '100%' : '0%' } : undefined}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
